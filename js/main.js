const { createApp } = Vue

createApp({
    data() {
        return {
            message: '',
            emails: [],
        }
    },
    mounted() {
        for (i = 0; i < 10; i = i + 1) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp.data.response);
                    this.emails.push(resp.data.response)

                }
                );
        }

    },

}).mount('#app');