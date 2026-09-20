'use client'

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react'
import { CalendarDays, CheckCircle2, Loader2, MapPin, X, AlertCircle } from 'lucide-react'
import { useRegistration } from '@/components/registration-context'
import { getSupabase } from '@/lib/supabase'

type FormState = {
  name: string
  email: string
  phone: string
  college: string
  branch: string
  year: string
  interest: string
  confirm: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  college: '',
  branch: '',
  year: '',
  interest: '',
  confirm: false,
}

type Errors = Partial<Record<keyof FormState, string>>

const years = ['1', '2', '3', '4', 'Postgraduate']
const interestOptions = ['SOLIDWORKS', 'ALTIUM', 'Both']

function validate(state: FormState): Errors {
  const errors: Errors = {}

  if (!state.name.trim()) errors.name = 'Please enter your full name.'

  if (!state.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  const digits = state.phone.replace(/\D/g, '')

  if (!state.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (digits.length < 10 || digits.length > 15) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!state.college.trim()) {
    errors.college = 'Please enter your college / institution.'
  }

  if (!state.branch.trim()) {
    errors.branch = 'Please enter your branch / department.'
  }

  if (!state.year) {
    errors.year = 'Please select your year of study.'
  }

  if (!state.confirm) {
    errors.confirm = 'Please confirm the information is correct.'
  }

  return errors
}

export function RegistrationModal() {
  const { isOpen, close } = useRegistration()

  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [serverError, setServerError] = useState('')
  const [registeredName, setRegisteredName] = useState('')

  const dialogRef = useRef<HTMLDivElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    const t = setTimeout(() => firstFieldRef.current?.focus(), 120)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [isOpen, close])

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        if (status === 'success') {
          setForm(initialState)
          setErrors({})
          setStatus('idle')
          setServerError('')
        }
      }, 300)

      return () => clearTimeout(t)
    }
  }, [isOpen, status])

  const update = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))

    setErrors((prev) => {
      if (!prev[key]) return prev

      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()

    const validation = validate(form)

    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setStatus('loading')
    setServerError('')

    try {
      const { error } = await getSupabase()
        .from('regestrations')
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          college: form.college.trim(),
          branch: form.branch.trim(),
          year: form.year,
          intrest: form.interest || 'Both',
        })

      if (error) {
        console.error('Supabase registration error:', error)
        throw new Error(
          error.message || 'Registration failed. Please try again.'
        )
      }

      setRegisteredName(form.name.trim())
      setStatus('success')
    } catch (err) {
      console.error(err)

      setStatus('error')
      setServerError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Workshop registration"
    >
      <button
        type="button"
        aria-label="Close registration form"
        onClick={close}
        className="absolute inset-0 animate-fade-in bg-background/70 backdrop-blur-md"
      />

      <div
        ref={dialogRef}
        className="animate-modal-in relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-border bg-surface shadow-2xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          data-cursor="hover"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center px-8 py-14 text-center">
            <div className="animate-scale-in flex h-20 w-20 items-center justify-center rounded-full bg-cyan/15 text-cyan ring-1 ring-cyan/30">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold">
              Registration Successful
            </h2>

            <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Thank you for registering for the SOLIDWORKS &amp; ALTIUM
              Workshop.
            </p>

            <dl className="mt-6 w-full max-w-xs space-y-2.5 rounded-2xl border border-border bg-background/40 p-5 text-left">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </dt>
                <dd className="text-sm font-semibold">{registeredName}</dd>
              </div>

              <div className="flex items-center justify-between gap-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Date
                </dt>

                <dd className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" />
                  26–27 September
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Venue
                </dt>

                <dd className="inline-flex items-center gap-1.5 text-sm font-semibold">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  SRM Campus
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={close}
              data-cursor="hover"
              className="mt-7 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--primary)]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="border-b border-border px-6 py-5 sm:px-8">
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-primary">
                Workshop Registration
              </span>

              <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold">
                Reserve your seat
              </h2>
            </div>

            <form
              onSubmit={submit}
              noValidate
              className="flex-1 space-y-4 overflow-y-auto px-6 py-6 sm:px-8"
            >
              <Field
                id="reg-name"
                label="Full Name"
                required
                error={errors.name}
              >
                <input
                  ref={firstFieldRef}
                  id="reg-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass(!!errors.name)}
                  placeholder="Your name"
                />
              </Field>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id="reg-email"
                  label="Email Address"
                  required
                  error={errors.email}
                >
                  <input
                    id="reg-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputClass(!!errors.email)}
                    placeholder="you@example.com"
                  />
                </Field>

                <Field
                  id="reg-phone"
                  label="Phone Number"
                  required
                  error={errors.phone}
                >
                  <input
                    id="reg-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={inputClass(!!errors.phone)}
                    placeholder="9999999999"
                  />
                </Field>
              </div>

              <Field
                id="reg-college"
                label="College / Institution"
                required
                error={errors.college}
              >
                <input
                  id="reg-college"
                  type="text"
                  autoComplete="organization"
                  value={form.college}
                  onChange={(e) => update('college', e.target.value)}
                  className={inputClass(!!errors.college)}
                  placeholder="Your college"
                />
              </Field>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id="reg-branch"
                  label="Branch / Department"
                  required
                  error={errors.branch}
                >
                  <input
                    id="reg-branch"
                    type="text"
                    value={form.branch}
                    onChange={(e) => update('branch', e.target.value)}
                    className={inputClass(!!errors.branch)}
                    placeholder="e.g. Mechanical"
                  />
                </Field>

                <Field
                  id="reg-year"
                  label="Year of Study"
                  required
                  error={errors.year}
                >
                  <select
                    id="reg-year"
                    value={form.year}
                    onChange={(e) => update('year', e.target.value)}
                    className={inputClass(!!errors.year)}
                  >
                    <option value="" disabled>
                      Select year
                    </option>

                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y === 'Postgraduate' ? y : `Year ${y}`}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                <Field
                  id="reg-interest"
                  label="Interested Tool"
                  optional
                >
                  <select
                    id="reg-interest"
                    value={form.interest}
                    onChange={(e) =>
                      update('interest', e.target.value)
                    }
                    className={inputClass(false)}
                  >
                    <option value="">Select (optional)</option>

                    {interestOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.confirm}
                    onChange={(e) =>
                      update('confirm', e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background text-primary accent-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />

                  <span className="text-sm text-muted-foreground">
                    I confirm that the information provided is correct.
                  </span>
                </label>

                {errors.confirm && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.confirm}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                data-cursor="hover"
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-10px_var(--primary)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : status === 'error' ? (
                  'Retry Registration'
                ) : (
                  'Complete Registration →'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring ${
    hasError ? 'border-destructive' : 'border-border'
  }`
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  optional?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground"
      >
        {label}

        {required && (
          <span className="text-primary">*</span>
        )}

        {optional && (
          <span className="font-normal normal-case tracking-normal text-muted-foreground/60">
            (optional)
          </span>
        )}
      </label>

      {children}

      {error && (
        <p className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
