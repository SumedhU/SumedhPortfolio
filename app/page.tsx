import Image from "next/image";
import { Container } from "./_components/Container";
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "./_components/SocialIcons";
import Link from "next/link";



function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}
export default function Home() {
  return (
  <>
    <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software developer, ui/ux enthusiast and amateur cardist.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Sumedh, a full-stack software developer based in Toronto, ON. I enjoy combining packets in 
            cardistry or components in development—making them work seamlessly together and optimizing where 
            it&apos;s needed for maximum impact.
          </p>
          <div className="mt-6 flex gap-6">
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/js_logo.svg'   
                alt="Javascript Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/ts_logo.png'   
                alt="Typescript Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/tailwind_logo.png'   
                alt="Tailwind Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/nextjs_logo.png'   
                alt="Nextjs Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/react_logo.png'   
                alt="ReactJS Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/node_logo.svg'   
                alt="Nodejs Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/flutter_logo.png'   
                alt="Flutter Logo"
                fill/>
            </div>
          </div>
          {/* Tools */}
          <div className="mt-6 flex gap-6">
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/firebase_logo.png'   
                alt="Firebase Logo"
                fill/>
            </div>
            <div className="relative w-6 h-6">
              <Image src='/tech_logo/git_logo.png'   
                alt="Git Logo"
                fill/>
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/KavkaCodes" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/SumedhU"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/sumedhudar/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
  </>
  );
}
