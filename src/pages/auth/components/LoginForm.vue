<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import GitHubButton from './GitHubButton.vue'
import GoogleButton from './GoogleButton.vue'
import PrivacyPolicyButton from './PrivacyPolicyButton.vue'
import TermsOfServiceButton from './TermsOfServiceButton.vue'
import ToForgotPasswordLink from './ToForgotPasswordLink.vue'
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your email and password below to log into your account.
        Not have an account?
        <Button
          variant="link" class="px-0 text-muted-foreground"
          @click="$router.push('/auth/sign-up')"
        >
          Sign Up
        </Button>
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center justify-between">
          <Label for="password">Password</Label>
          <ToForgotPasswordLink />
        </div>
        <Input id="password" type="password" required placeholder="*********" />
      </div>

      <Button class="w-full">
        Login
      </Button>

      <Separator label="Or continue with" />

      <div class="flex items-center justify-between gap-4">
        <GitHubButton />
        <GoogleButton />
      </div>

      <CardDescription>
        By clicking login, you agree to our
        <TermsOfServiceButton />
        and
        <PrivacyPolicyButton />
      </CardDescription>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
