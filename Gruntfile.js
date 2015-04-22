module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js']
        },


        uglify: {
            themes: {
                src: ["themes/*/theme.js"],
                expand: true,
                ext: ".min.js"
            },

            plugins: {
                src: ["plugins/*/plugin.js"],
                expand: true,
                ext: ".min.js"
            }
        }
    });
    grunt.registerTask('default', ['jshint', 'uglify']);
};