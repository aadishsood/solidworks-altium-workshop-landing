import { NextResponse } from 'next/server'

type RegistrationPayload = {
  name?: string
  email?: string
  phone?: string
  college?: string
  branch?: string
  year?: string
  experience?: string
  interest?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: RegistrationPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const phone = body.phone?.trim()
  const college = body.college?.trim()
  const branch = body.branch?.trim()
  const year = body.year?.trim()

  if (!name || !email || !phone || !college || !branch || !year) {
    return NextResponse.json(
      { success: false, message: 'Please fill in all required fields.' },
      { status: 400 }
    )
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Please provide a valid email address.' },
      { status: 400 }
    )
  }

  const phoneDigits = phone.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json(
      { success: false, message: 'Please provide a valid phone number.' },
      { status: 400 }
    )
  }

  // A database integration (e.g. Neon or Supabase) can be wired in here to
  // persist each registration as a record. The frontend already handles the
  // loading, success and error states returned by this endpoint.
  const registration = {
    name,
    email,
    phone,
    college,
    branch,
    year,
    experience: body.experience?.trim() || 'Not specified',
    interest: body.interest?.trim() || 'Both',
    registeredAt: new Date().toISOString(),
  }

  console.log('[v0] New workshop registration:', registration)

  return NextResponse.json({
    success: true,
    message: 'Registration successful',
  })
}
