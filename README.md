# Ember Reader

Ember Reader is a simple RSS reader built with Ember.js and Ember-Data. It was created for [this presentation](http://emberjs-seattle.github.io/ember-reader-preso) ([video here](http://youtu.be/obaWh8xL2C0)). It follows a branching convention that closely follows the structure of the presentation:

```
 ember-reader git:(master) git branch
  1-hello-world
  2-templates-first
  3-resources-and-routes
  4-dynamic-data
  5-crud
  6-relationships
  7-sub-sub-relationships
  8-polish
* master
```

For example, in order view the state of the application at the first "Starting Point" slide, simply run the following command:

```
git checkout 1-hello-world
```

## Running the App

Ember Reader uses [ember-rails](https://github.com/emberjs/ember-rails) and can quickly be started locally as follows:

```
git clone https://github.com/emberjs-seattle/ember-reader.git
cd ember-reader
bundle install
bundle exec rails s
```
