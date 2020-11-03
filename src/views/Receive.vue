<template>
  <div>
    <Dashboard1 />
    <!-- <MyNav /> -->
    <ReceiveForm />
  </div>
</template>

<script>
import ReceiveForm from '@/components/ReceiveForm';
import Dashboard1 from '@/components/Dashboard1';
// import MyNav from '@/components/MyNav';


export default {
  name: 'Receive',
  components: {
    ReceiveForm,
    Dashboard1,
    // MyNav,
  },

}
</script>

<style>

</style>