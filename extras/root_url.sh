#!/bin/sh
#
# If ROOT_URL is not set, default to https://appname.herokuapp.com.
#
#cat > "$APP_CHECKOUT_DIR"/.profile.d/root_url.sh <<EOF
  #!/bin/bash
#  if [ -z "\$ROOT_URL" ] && [ -n "\$HEROKU_APP_NAME" ] ; then
#    export ROOT_URL="https://${HEROKU_APP_NAME}.herokuapp.com"
#  fi
#EOF
