<template>
  <div class="home">
    <Dashboard1 />
    <MyNav />
    <Transections />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard1 from '@/components/Dashboard1';
import Transections from '@/components/Transections'
import MyNav from '@/components/MyNav';

export default {
  name: 'Home',
  components: {
    Dashboard1,
    Transections,
    MyNav,
  },
}
</script>


