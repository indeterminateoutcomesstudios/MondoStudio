#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
TEMPLATE="$BASEDIR/../src/firebase-config.ts.template"
LOCAL="$BASEDIR/../src/firebase-config.ts"

read_attrs() { 
  echo -n "API_KEY: ";
  read FIREBASE_API_KEY;
  echo -n "PROJECT_ID: ";
  read FIREBASE_PROJECT_ID;
  echo -n "DATABASE_NAME: ";
  read FIREBASE_DATABASE_NAME;
  echo -n "BUCKET: ";
  read FIREBASE_BUCKET;
  echo -n "SENDER_ID: ";
  read FIREBASE_SENDER_ID;

  echo -e "\n== BEGIN: firebase-config.ts ================\n"
  cat $TEMPLATE \
      |sed "s|\<FIREBASE_API_KEY\>|$FIREBASE_API_KEY|g" \
      |sed "s|\<FIREBASE_PROJECT_ID\>|$FIREBASE_PROJECT_ID|g" \
      |sed "s|\<FIREBASE_DATABASE_NAME\>|$FIREBASE_DATABASE_NAME|g" \
      |sed "s|\<FIREBASE_BUCKET\>|$FIREBASE_BUCKET|g" \
      |sed "s|\<FIREBASE_SENDER_ID\>|$FIREBASE_SENDER_ID|g";
  echo -e "\n== END: firebase-config.ts ==================\n"

  echo -n "Is everything alright? (Y/n): ";
  read OPT
  if [[ -z "$OPT" ]]; then
      OPT="y"
  fi

  if [[ "$(echo $OPT|tr [:lower:] [:upper:])" == "Y" ]]; then
    cat $TEMPLATE \
      |sed "s|\<FIREBASE_API_KEY\>|$FIREBASE_API_KEY|g" \
      |sed "s|\<FIREBASE_PROJECT_ID\>|$FIREBASE_PROJECT_ID|g" \
      |sed "s|\<FIREBASE_DATABASE_NAME\>|$FIREBASE_DATABASE_NAME|g" \
      |sed "s|\<FIREBASE_BUCKET\>|$FIREBASE_BUCKET|g" \
      |sed "s|\<FIREBASE_SENDER_ID\>|$FIREBASE_SENDER_ID|g" > $LOCAL;
  else
    echo -n "Do you want to try again? (Y/n): ";
    read OPT2;
    if [[ -z "$OPT2" ]]; then
        OPT2="y"
    fi
    OPT2=$(echo $OPT2|tr [:lower:] [:upper:])

    if [ $OPT2 == "Y" ]; then
      read_attrs;
    fi
  fi
}

if [ -f $TEMPLATE ]; then
  read_attrs;
  echo "The End";
fi
