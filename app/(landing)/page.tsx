import Link from "next/link";
import { BackgroundGrid } from "@/components/ui/background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-bold text-primary-foreground text-sm">
                2A
              </span>
            </div>
            <span className="font-bold text-xl">2ALabs</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="#how-it-works"
            >
              How it Works
            </Link>
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="#pricing"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button size="sm" variant="ghost">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="">
        <BackgroundGrid>
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <Badge className="mb-4" variant="secondary">
                  Welcome to 2ALabs
                </Badge>
                <h1 className="mb-6 font-bold text-4xl tracking-tight md:text-6xl">
                  Build Better Products{" "}
                  <span className="text-primary">Faster</span>
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  A powerful platform designed to help you ship features
                  quicker, manage your projects efficiently, and scale without
                  friction.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/register">
                    <Button className="w-full sm:w-auto" size="lg">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      className="w-full sm:w-auto"
                      size="lg"
                      variant="outline"
                    >
                      View Demo
                    </Button>
                  </Link>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">
                  No credit card required · 14-day free trial · Cancel anytime
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-20" id="features">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-bold text-3xl md:text-4xl">
                  Everything You Need
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Powerful features to help your team collaborate, build, and
                  ship products that users love.
                </p>
              </div>
              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Setup</CardTitle>
                    <CardDescription>
                      Get started in minutes with our intuitive onboarding
                      process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Deploy your first project with just a few clicks. No
                      complex configuration needed.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Team Collaboration</CardTitle>
                    <CardDescription>
                      Work together seamlessly with real-time updates and
                      sharing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Invite team members, assign tasks, and track progress in
                      one place.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics & Insights</CardTitle>
                    <CardDescription>
                      Make data-driven decisions with powerful analytics tools.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Track user behavior, monitor performance, and identify
                      opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Secure & Reliable</CardTitle>
                    <CardDescription>
                      Enterprise-grade security for your peace of mind.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Bank-level encryption, SOC 2 compliance, and 99.9% uptime
                      guarantee.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>API Integration</CardTitle>
                    <CardDescription>
                      Connect with your favorite tools and services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      RESTful APIs and webhooks to integrate with your existing
                      workflow.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>24/7 Support</CardTitle>
                    <CardDescription>
                      Our team is here to help you succeed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Get help when you need it with our dedicated support team.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20" id="how-it-works">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-bold text-3xl md:text-4xl">
                  How It Works
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Get up and running in three simple steps.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground">
                    1
                  </div>
                  <h3 className="mb-2 font-semibold text-lg">Create Account</h3>
                  <p className="text-muted-foreground">
                    Sign up for free and set up your workspace in minutes.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground">
                    2
                  </div>
                  <h3 className="mb-2 font-semibold text-lg">Add Your Team</h3>
                  <p className="text-muted-foreground">
                    Invite collaborators and start working together.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground">
                    3
                  </div>
                  <h3 className="mb-2 font-semibold text-lg">Ship Faster</h3>
                  <p className="text-muted-foreground">
                    Build, test, and deploy with our powerful platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-20" id="pricing">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-bold text-3xl md:text-4xl">
                  Simple Pricing
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Choose the plan that works best for you and your team.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for individuals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 font-bold text-3xl">
                      $0
                      <span className="font-normal text-muted-foreground text-sm">
                        /month
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-muted-foreground text-sm">
                      <li>✓ Up to 3 projects</li>
                      <li>✓ Basic analytics</li>
                      <li>✓ Community support</li>
                      <li>✓ 1GB storage</li>
                    </ul>
                    <Link className="block" href="/register">
                      <Button className="w-full" variant="outline">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="border-primary">
                  <CardHeader>
                    <Badge className="mb-2 w-fit">Popular</Badge>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Best for growing teams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 font-bold text-3xl">
                      $29
                      <span className="font-normal text-muted-foreground text-sm">
                        /month
                      </span>
                    </div>
                    <ul className="mb-6 space-y-2 text-muted-foreground text-sm">
                      <li>✓ Unlimited projects</li>
                      <li>✓ Advanced analytics</li>
                      <li>✓ Priority support</li>
                      <li>✓ 50GB storage</li>
                      <li>✓ Team collaboration</li>
                    </ul>
                    <Link className="block" href="/register">
                      <Button className="w-full">Start Free Trial</Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 font-bold text-3xl">Custom</div>
                    <ul className="mb-6 space-y-2 text-muted-foreground text-sm">
                      <li>✓ Everything in Pro</li>
                      <li>✓ Custom integrations</li>
                      <li>✓ Dedicated support</li>
                      <li>✓ Unlimited storage</li>
                      <li>✓ SSO & SAML</li>
                    </ul>
                    <Link className="block" href="/register">
                      <Button className="w-full" variant="outline">
                        Contact Sales
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
                <h2 className="mb-4 font-bold text-3xl md:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                  Join thousands of teams who are already using 2ALabs to build
                  amazing products.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/register">
                    <Button
                      className="w-full sm:w-auto"
                      size="lg"
                      variant="secondary"
                    >
                      Create Free Account
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      className="w-full border-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
                      size="lg"
                      variant="outline"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </BackgroundGrid>
      </main>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                  <span className="font-bold text-primary-foreground text-xs">
                    2A
                  </span>
                </div>
                <span className="font-bold">2ALabs</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Building the future of product development.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link className="hover:text-foreground" href="#features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="#">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link className="hover:text-foreground" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="#">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link className="hover:text-foreground" href="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="#">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="#">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © 2025 2ALabs. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="#"
              >
                Twitter
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="#"
              >
                GitHub
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="#"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
