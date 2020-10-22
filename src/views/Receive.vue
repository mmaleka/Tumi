<template>
  <div>
    <Dashboard1 />
    <ReceiveForm />
  </div>
</template>

<script>
import ReceiveForm from '@/components/ReceiveForm';
import Dashboard1 from '@/components/Dashboard1';


export default {
  name: 'Receive',
  components: {
    ReceiveForm,
    Dashboard1
  },

}
</script>

<style>

</style>