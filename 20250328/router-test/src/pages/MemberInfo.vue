<template>
  <div class="card card-body">
    <!-- <h2>Member Info</h2>
    <div>
      경로 패턴: /members/:id<br />
      요청 경로: {{ currentRoute.path }}<br />
      id값: {{ currentRoute.params.id }}<br />
    </div> -->
    <div class="mt-5">
      <img :src="member.photo" alt="멤버 사진" />
      <div>{{ member.name }}({{ member.role }})</div>
      <div>{{ member.desc }}</div>
      <div class="my-3">
        <a
          v-if="member.insta && member.insta != ''"
          class="fa fa-instagram"
          :href="member.insta"
        ></a>
        <a
          v-if="member.facebook && member.facebook != ''"
          class="fa fa-facebook"
          :href="member.facebook"
        ></a>
        <a
          v-if="member.youtube && member.youtube != ''"
          class="fa fa-youtube"
          :href="member.youtube"
        ></a>
      </div>
      <router-link to="/members">멤버 목록으로</router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import members from '@/members.json';

export default {
  name: 'MemberInfo',

  setup() {
    // useRoute() : 현재 라우트 정보 객체
    const currentRoute = useRoute();
    const id = parseInt(currentRoute.params.id);

    const member = members.find((mem) => mem.id === id);

    console.log('currentRoute :', currentRoute);

    return { currentRoute, member };
  },
};
</script>
