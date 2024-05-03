<script setup lang='ts'>

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost">
        <Icon
					class="mr-1"
					size="26"
					name="ic:baseline-favorite-border"
					color="hsl(var(--primary))"
				/>
        Избранное
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Избранное</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" class="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit">
            Save changes
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>