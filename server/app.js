const express = require('express')
const { createClient } = require('@supabase/supabase-js')

const app = express()
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.use(express.json({ limit: '10kb' }))

function jsonError(res, message, status = 400) {
  return res.status(status).json({ success: false, message })
}

app.get(['/api/health', '/health'], (_req, res) => {
  res.status(200).json({ success: true, service: 'registration-api' })
})

app.post(['/api/register', '/register', '/'], async (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : {}
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const college = typeof body.college === 'string' ? body.college.trim() : ''
  const branch = typeof body.branch === 'string' ? body.branch.trim() : ''
  const year = typeof body.year === 'string' ? body.year.trim() : ''
  const interest = typeof body.interest === 'string' ? body.interest.trim() : 'Both'

  if (!name || !email || !phone || !college || !branch || !year) {
    return jsonError(res, 'Please fill in all required fields.')
  }

  if (!emailRegex.test(email)) {
    return jsonError(res, 'Please provide a valid email address.')
  }

  const phoneDigits = phone.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return jsonError(res, 'Please provide a valid phone number.')
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables are missing.')
    return jsonError(res, 'Registration service is not configured.', 500)
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { error } = await supabase.from('regestrations').insert({
    name,
    email,
    phone,
    college,
    branch,
    year,
    intrest: interest || 'Both',
  })

  if (error) {
    console.error('Supabase registration error:', error)
    return jsonError(res, 'Registration failed. Please try again.', 500)
  }

  return res.status(201).json({
    success: true,
    message: 'Registration successful',
  })
})

app.use((_req, res) => jsonError(res, 'Endpoint not found.', 404))

module.exports = app
