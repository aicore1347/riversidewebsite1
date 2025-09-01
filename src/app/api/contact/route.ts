import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const emailData = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.TO_EMAIL || 'riversidegenai@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #00BFFF; margin-bottom: 30px; text-align: center; border-bottom: 2px solid #00BFFF; padding-bottom: 15px;">
              🚀 New Contact Form Submission
            </h1>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0; margin-bottom: 15px; font-size: 18px;">
                📋 Contact Details
              </h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555; display: inline-block; width: 100px;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555; display: inline-block; width: 100px;">Email:</strong>
                <a href="mailto:${email}" style="color: #00BFFF; text-decoration: none;">${email}</a>
              </div>
              
              ${company ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #555; display: inline-block; width: 100px;">Company:</strong>
                <span style="color: #333;">${company}</span>
              </div>
              ` : ''}
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555; display: inline-block; width: 100px;">Submitted:</strong>
                <span style="color: #333;">${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</span>
              </div>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0; margin-bottom: 15px; font-size: 18px;">
                💬 Message
              </h2>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #00BFFF; border-radius: 4px; font-style: italic; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                This message was sent from the Riverside AI contact form
              </p>
              <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
                Reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    })

    console.log('Email sent successfully:', emailData)

    return NextResponse.json(
      { 
        message: 'Thank you for your message! We will get back to you soon.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    // More specific error handling
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}