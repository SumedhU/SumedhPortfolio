import { Card } from '../_components/Card'
import { Section } from '../_components/Section'
import { SimpleLayout } from '../_components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="No one asked me what I use to build software but I want to make my website look full. 
      Here's a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM">
            I was using a windows laptop prior to this and I avoid using it as much as I can.
          </Tool>
          <Tool title="Logitech MX Master 3">
          The only mouse on the market if you want precision, comfort, and control.
          </Tool>
          <Tool title="Keychron K6 Keyboard">
            I have a fully customised back keyboard with Golden Yellow Gateron Switches and a Custom Keycap of a dumpling that reminds me of my girl.
            It's not just a keyboard—it's a little piece of comfort in my workflow.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
          It's like the Swiss Army knife of coding—lightweight, customizable, and ready for anything.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
          Figma is where most of my ideas take shape before they ever touch code. 
          Whether it's wireframing user flows, prototyping interactions, 
          or collaborating in real time, it's become an essential part of how I build.
          Fun fact: the little character and garden map on my About page? Yep, all built in Figma.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Playing Cards">
          <Tool title="Bicycle">
            The classic. I first noticed the deck on tv when Dynamo was performing the dynamo shuffle. 
            It was the first deck of cards I bought to learn that shuffle.
          </Tool>
          <Tool title="Memento Mori by Chris Ramsay">
            Memento Mori - "Remember your mortality"
            I learnt everything Chris Ramsay taught and I got his first deck of playing cards. I love them.
          </Tool>
          <Tool title="DKNG Red Wheels">
            This deck is the thinner, prettier version of the Bicycles. It feels like I am playing with butter when I hold them in my hands.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
