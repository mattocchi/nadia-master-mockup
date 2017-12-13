<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card>

        </user-card>
        <!-- <members-card>

        </members-card> -->
      </div>
      <!-- <div class="col-lg-8 col-md-7">
        <edit-profile-form>

        </edit-profile-form>
      </div> -->
      <div class="col-lg-4 col-md-5">
        <user-card-fitness nome="Dott.ssa Eva Lovat" link="@evylovat" frase="Fitness uno stile di vita">

        </user-card-fitness>
        <!-- <members-card>

        </members-card> -->
      </div>
      <div class="col-lg-4 col-md-5">
        <user-card-medico nome="Dott. Mario Rossi" link="@mariorossi">

        </user-card-medico>
        <members-card>

        </members-card>
      </div>
      <div class="col-lg-4 col-md-5">
        <user-card-medico nome="Dott. John V. Doe" link="@mariorossi">

        </user-card-medico>
        <!-- <members-card>

        </members-card> -->
      </div>
      <div class="col-lg-4 col-md-5">
        <user-card-medico nome="Dott. Juan Pérez" link="@mariorossi">

        </user-card-medico>
        <!-- <members-card>

        </members-card> -->
      </div>
      <div class="col-lg-4 col-md-5">
        <user-card-fitness nome="Dott.ssa Camilla Trentin" link="@evylovat" frase="Prevenire è meglio che curare">

        </user-card-fitness>
        <!-- <members-card>

        </members-card> -->
      </div>
    </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import UserCardFitness from './UserProfile/UserCardFitness.vue'
  import UserCardMedico from './UserProfile/UserCardMedico.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard,
      UserCardFitness,
      UserCardMedico
    }
  }

</script>
<style>

</style>
