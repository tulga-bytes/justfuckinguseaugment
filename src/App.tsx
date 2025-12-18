import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import { Button } from "./components/ui/button"
import { ThemeToggle } from "./components/theme-toggle"
import { ArrowRight } from "lucide-react"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background antialiased">
      {/* Floating nav - positioned at top right */}
      <nav className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant="inverted"
          size="icon-xl"
        >
          <a href="https://github.com/tulga-bytes/justfuckinguseaugment" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-5 w-5" />
            <span className="sr-only">View on GitHub</span>
          </a>
        </Button>
        <ThemeToggle />
      </nav>

      <main className="max-w-[80ch] mx-auto px-6 py-24 md:py-32">
        {/* Hero */}
        <header className="mb-20 md:mb-28">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            A love letter to sanity
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
            Just Fucking Use Augment
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[55ch]">
            You've spent years copy-pasting code between your editor and chat windows,
            fighting with context limits, and explaining your codebase to AI that forgets
            everything 5 minutes later. That ends today.
          </p>
        </header>

        <article className="space-y-16 md:space-y-24">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
              Your AI assistant is a disaster.
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                You've been using Cursor or Claude Code for how long now? And you're still sitting there,
                copying code back and forth, manually explaining your architecture, praying it remembers
                the context from 3 messages ago.
              </p>
            </div>

            {/* Styled code block */}
            <div className="my-8 rounded-lg border bg-card overflow-hidden">
              <div className="px-4 py-2 border-b bg-muted/30 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">your-workflow.txt</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1">
                <p><span className="text-muted-foreground select-none mr-3">1</span>Copy code from editor</p>
                <p><span className="text-muted-foreground select-none mr-3">2</span>Paste into chat window</p>
                <p><span className="text-muted-foreground select-none mr-3">3</span>Explain your entire architecture</p>
                <p><span className="text-muted-foreground select-none mr-3">4</span>Get suggestion that ignores your patterns</p>
                <p><span className="text-muted-foreground select-none mr-3">5</span>Copy back to editor</p>
                <p><span className="text-muted-foreground select-none mr-3">6</span>Repeat 47 times per day</p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                You've got 3 different AI tools, 12 browser tabs open, and you still can't get a refactor
                that works across multiple files. Half your time is spent explaining context. The other half
                is fixing suggestions that don't match your codebase.
              </p>
              <p className="text-foreground font-medium">
                This is the hell you chose. And for what? "Good enough"? Give me a break.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
              What the fuck is Augment?
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Augment is an AI coding assistant that actually understands your entire codebase.
                Not just the file you're looking at. Not just what you manually paste into a chat.
              </p>
              <p>
                Your <strong className="text-foreground">entire fucking codebase</strong>. With context that actually works.
              </p>
            </div>

            <Card className="border-2">
              <CardHeader className="pb-2">
                <CardDescription className="text-xs font-medium tracking-widest uppercase">Example</CardDescription>
                <CardTitle className="text-lg font-medium">Want to refactor across 15 files?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 border rounded-md p-4 font-mono text-sm italic">
                  "Refactor the UserAuth class to use the new token system"
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Result:</span> All 15 files updated. All imports fixed. All tests passing.
                  No copy-paste. No manual hunting. It just works.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Why it's great - Feature grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
              Why it's fucking great
            </h2>

            <div className="grid gap-8 md:gap-6">
              <div className="group">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  No more context juggling
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  There are only two hard things in computer science: cache invalidation, naming things,
                  and explaining your codebase to AI for the 47th time. Augment eliminates one of those.
                </p>
              </div>

              <div className="group">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  Multi-file edits without the headache
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-4 mb-3">
                  Remember manually updating every file that imports a function you renamed?
                </p>
                <div className="ml-4 border-l-2 border-muted pl-4 space-y-1 font-mono text-xs text-muted-foreground">
                  <p>✓ utils/auth.ts</p>
                  <p>✓ components/Login.tsx</p>
                  <p>✓ tests/auth.test.ts</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  Understands your patterns
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  Augment knows your naming conventions, your architecture patterns, your code style.
                  It's not throwing random Stack Overflow snippets at you.
                </p>
              </div>

              <div className="group">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  No dead suggestions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  No orphaned imports. No "this function doesn't exist" errors.
                  Augment only suggests what actually fits.
                </p>
              </div>

              <div className="group">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  A workflow that doesn't suck
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  Consistent context, instant understanding, zero copy-paste. Your development flow will finally
                  feel like it was designed by one person, not a committee of drunk raccoons.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight">
              See the difference
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">Compare the workflows side by side.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs font-medium tracking-widest uppercase text-muted-foreground/70">Others</CardDescription>
                  <CardTitle className="text-base font-medium">The copy-paste circus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground font-mono">
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">1.</span> Copy code to chat</p>
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">2.</span> Explain architecture</p>
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">3.</span> Get generic suggestion</p>
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">4.</span> Manually update 15 files</p>
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">5.</span> Fix broken imports</p>
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">6.</span> Cry</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-foreground/20">
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs font-medium tracking-widest uppercase">Augment</CardDescription>
                  <CardTitle className="text-base font-medium">The way it should be</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm font-mono">
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">1.</span> Ask for refactor</p>
                  <p className="flex items-start gap-2"><span className="text-muted-foreground/50">2.</span> Done</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Objections */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
              "But wait..."
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-sm font-semibold mb-2 text-foreground">"My current tool works fine!"</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your 3-step workflow that takes 10 minutes is what's actually broken.
                  Augment keeps context exactly where you need it.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-sm font-semibold mb-2 text-foreground">"It's just better autocomplete!"</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Multi-file refactoring. Architecture understanding. Codebase-wide context.
                  Saying Augment is "just autocomplete" is like saying a Tesla is "just a car."
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-sm font-semibold mb-2 text-foreground">"I need to control every change!"</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Augment shows you exactly what it's changing. You review, you approve, you move on.
                  It's about choosing the right tool for the right job.
                </p>
              </div>
            </div>
          </section>

          {/* When to use */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
              When should you use Augment?
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Building a new feature",
                "Working on a team",
                "Need to refactor",
                "Understanding unfamiliar code",
                "Tired of copy-paste",
                "Want to ship"
              ].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <Separator />

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
              Stop overthinking. Start building.
            </h2>
            <p className="text-muted-foreground mb-2 max-w-md mx-auto">
              Augment isn't perfect. Nothing is. But it solves real problems that AI coding assistants
              have had since day one.
            </p>
            <p className="text-xl font-semibold mb-8">
              Just fucking use Augment.
            </p>
            <a
              href="https://www.augmentcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>
        </article>

        <Separator className="my-16" />

        <footer className="text-center pb-8 space-y-2">
          <p className="text-xs text-muted-foreground">
            Inspired by{' '}
            <a href="https://justfuckingusetailwind.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
              justfuckingusetailwind.com
            </a>
            {', '}
            <a href="https://justfuckingusereact.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
              justfuckingusereact.com
            </a>
            {' & '}
            <a href="https://justfuckingusehtml.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
              justfuckingusehtml.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Built by Tulga Tsogtgerel |{' '}
            <a href="https://x.com/tulga_bytes" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
              Twitter/X
            </a>
            {' | '}
            <a href="https://github.com/tulga-bytes" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
