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
import PinInput from '@/components/ui/pin-input/PinInput.vue'
import PinInputGroup from '@/components/ui/pin-input/PinInputGroup.vue'
import PinInputInput from '@/components/ui/pin-input/PinInputInput.vue'

const value = ref<string[]>(['1', '2', '3'])
// eslint-disable-next-line no-alert
const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
  <div>
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <slot name="header" />
        <CardTitle class="text-2xl">
          找回密码
        </CardTitle>
        <CardDescription>
          使用您的邮箱找回密码
        </CardDescription>
      </CardHeader>
      <CardContent>
        <slot name="content" />
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
              <Label for="password">新密码</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">确认密码</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">邮箱验证码</Label>
            </div>
            <PinInput
              id="pin-input"
              v-model="value"
              placeholder="○"
              @complete="handleComplete"
            >
              SA-
              <PinInputGroup>
                <PinInputInput
                  v-for="(id, index) in 4"
                  :key="id"
                  :index="index"
                />
              </PinInputGroup>
            </PinInput>
          </div>
          <Button type="submit" class="w-full">
            找回密码
          </Button>
        </div>
      </CardContent>

      <CardFooter class="flex justify-end">
        <ToggleTheme />
      </CardFooter>
    </Card>
    <div class="mt-4 text-center text-sm">
      <router-link to="/auth/login" class="underline">
        返回登录
      </router-link>
    </div>
  </div>
</template>

<style></style>

<route lang="yaml">
  meta:
    layout: auth
  </route>
