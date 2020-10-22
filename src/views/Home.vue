<template>
  <div class="home">
    <Dashboard1 />
    <Transections />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard1 from '@/components/Dashboard1';
import Transections from '@/components/Transections'

export default {
  name: 'Home',
  components: {
    Dashboard1,
    Transections,
  },
}
</script>


