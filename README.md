# Discourse LinkedIn Sharing Button
By default, Discourse supports sharing posts on Twitter, Facebook, Google+ and email.
With this plugin, you can add support for sharing on LinkedIn in the same fashion.

# How To Use

1) Add a line to your app.yml (I'm assuming you're running Discourse in Docker. If not, you're on your own!)

```
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/rcfox/Discourse-LinkedIn-Sharing-Button.git
```
(It might be a good idea to fork this repo so that I don't change it underneath you.)

2) In `/var/discourse`, run: `./launcher rebuild app`

Note: This will probably take ~10 minutes to finish.

3) In the Discourse Admin settings, under the "Basic Setup" category, add `linkedin` to the "share links" setting.

Note: It seems Discourse currently doesn't respect the ordering of share links added by plugins.
The LinkedIn button will be last. :\
