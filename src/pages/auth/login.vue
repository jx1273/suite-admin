<script lang="ts" setup>
import ToggleTheme from '@/components/ToggleTheme.vue'
import Button from '@/components/ui/button/Button.vue'
import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'

const router = useRouter()

function login() {
  router.push({ name: 'workspace' })
}
</script>

<template>
  <div>
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">
          登录
        </CardTitle>
        <CardDescription>
          使用邮箱登录您的账户
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">密码</Label>
              <router-link to="/auth/forgot" class="ml-auto inline-block text-sm underline">
                忘记密码?
              </router-link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full" @click="login">
            登录
          </Button>
        </div>
      </CardContent>
      <CardFooter class="flex justify-end">
        <ToggleTheme />
      </CardFooter>
    </Card>
    <div class="mt-4 text-center text-sm">
      <router-link to="/auth/register" class="underline">
        还没有账户？
      </router-link>
    </div>
  </div>
</template>

<style></style>

<route lang="yaml">
meta:
  layout: auth
</route>
