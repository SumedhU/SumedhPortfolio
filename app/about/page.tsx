import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '../_components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '../_components/SocialIcons'
import { ArrowDownIcon, BriefcaseIcon } from '@heroicons/react/16/solid'
import { Button } from '../_components/Button'
import { Gameboy } from "../_gameboy/gameboy";
// import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}
interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}
function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 bg-black dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" fill className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  const resume: Array<Role> = [
    {
      company: 'GlamPRO',
      title: 'Mobile Developer - Intern',
      logo: '/GlamPro_logo.png',
      start: 'May, 2024',
      end: 'Aug, 2024',
    },
    {
      company: 'Solutions-FIS',
      title: 'Software Developer',
      logo: 'https://avatars.githubusercontent.com/u/103938128?s=400&u=76a782cf82a1c4416057461a24f50aedab22c842&v=4',
      start: '2020',
      end: {
        label: '2025',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Staples Canada',
      title: 'Technology Sales Associate',
      logo: '/Staples_logo.png',
      start: '2023',
      end: 'Present',
    },
  ]

  return (
    <div className="mt-5 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/SoftwareDeveloper_Resume_SumedhUdar.pdf" download="SumedhUdar_Resume.pdf" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
export const metadata: Metadata = {
  title: 'About',
  description:
    'I\'m Sumedh Udar. I live in Toronto, where I develop the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            {/* <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            /> */}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Sumedh Udar. I live in Toronto.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              When I was 6, my mom — who helped with accounting at my dad&apos;s software company — 
              sat me down in front of a clunky CRT monitor running Windows 3.1. She opened a game 
              called Chip&apos;s Challenge to keep me entertained while she worked. That was my first 
              time using a computer, and I was instantly hooked.<span className='bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5'>I have provided a visual representation of me before she made me sit in front of the computer.</span>
            </p>
            <p>
              From there, I fell in love with computer games. My childhood was filled with long sessions of 
              Pokémon, Sonic, and Tetris — sometimes playing, sometimes just trying to figure out how the games 
              worked. I didn&apos;t know it then, but that curiosity would stick with me.
            </p>
            <p>
              When I enrolled in Computer Engineering, I didn&apos;t know how to code — and honestly, I wasn&apos;t even sure I was 
              interested in it. But I&apos;ve always loved making (and breaking) things, poking around to see how they&apos;re built. 
              That instinct kicked in during the COVID lockdowns, when I started building small projects just for fun. One 
              turned into another, then another — and I haven&apos;t stopped since.
            </p>
            <p>
              Over the past few years, I&apos;ve also been helping out at my dad&apos;s software company — taking on small dev tasks, 
              assisting with product ideas, and getting a real-world glimpse into running a tech business.
            </p>
            <p>
              Now, I&apos;m a fresh graduate from Humber College in Toronto. I take on freelance work, build full-stack apps for 
              fun, and am looking for a role where I can keep learning and building cool things with great people.
            </p>
          </div>
        </div>
        <div className="lg:pl-20 justify-center">
          <Gameboy/>
          <Resume/>
          <ul className='py-10 px-5' role="list">
            <SocialLink href="https://x.com/KavkaCodes" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/SumedhU" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/sumedhudar/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:sumedh.udar2000@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              sumedh.udar2000@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
