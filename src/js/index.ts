new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        letters: "",
        outPut: "",
        operation: ""
    },
    methods: {

        manipulateString() {
            if (this.letters == "") {
                alert("skriv i boksen")
                return
            }
            switch (this.operation) {
                case "toUpper": this.outPut = this.letters.toUpperCase(); break;
                case "toLower": this.outPut = this.letters.toLowerCase(); break;
                default: alert("vælg en ting")
            }

        }
    }
})