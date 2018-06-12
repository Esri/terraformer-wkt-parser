var fs = require('fs');
var jison = require('jison');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg:   grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*! Terraformer JS - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '*   https://github.com/esri/terraformer-wkt-parser\n' +
        '*   Copyright (c) 2013-<%= grunt.template.today("yyyy") %> Esri, Inc.\n' +
        '*   Licensed MIT */'
    },

    uglify: {
      options: {
        report: 'gzip',
        banner: '<%= meta.banner %>'
      },
      wkt: {
        src: ["terraformer-wkt-parser.js"],
        dest: 'terraformer-wkt-parser.min.js'
      }
    },

    vows: {
      all: {
        options: {
          reporter: "spec",
          verbose: true,
          silent: false,
          colors: true
        },
        src: [ "test/*.js" ]
      }
    },

    // could add back in when https://github.com/gruntjs/grunt-contrib-jasmine/pull/269 lands
    // jasmine: {
    //   coverage: {
    //     src: [
    //       "terraformer-wkt-parser.js"
    //     ],
    //     options: {
    //       specs: 'spec/*Spec.js',
    //       helpers: [
    //         "node_modules/terraformer/terraformer.js"
    //       ],
    //       //keepRunner: true,
    //       outfile: 'SpecRunner.html',
    //       template: require('grunt-template-jasmine-istanbul'),
    //       templateOptions: {
    //         coverage: './coverage/coverage.json',
    //         report: './coverage',
    //         // due to the generated aspects of the parser, thresholds are much lower
    //         thresholds: {
    //           lines: 70,
    //           statements: 70,
    //           branches: 70,
    //           // to do: get this back above 70
    //           functions: 65
    //         }
    //       }
    //     }
    //   }
    // },


  });

  grunt.registerTask('wkt-parser', 'Building WKT Parser', function() {
    var grammar = fs.readFileSync('./src/wkt.yy', 'utf8');

    var wrapper = fs.readFileSync('./src/module-source.js', 'utf8');

    var Parser = jison.Parser;
    var parser = new Parser(grammar);

    // generate source, ready to be written to disk
    var parserSource = parser.generate({ moduleType: "js" });

    wrapper = wrapper.replace('"SOURCE";', parserSource);

    fs.writeFileSync("./terraformer-wkt-parser.js", wrapper, "utf8");

    grunt.log.write('Files created.\n');
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-vows");
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-s3');

  grunt.registerTask('test', [ 'wkt-parser', 'vows' ]);
  grunt.registerTask('default', [ 'test' ]);
  grunt.registerTask('version', [ 'test', 'uglify']);
};
