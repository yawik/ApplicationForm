# Application Form

standalone application form based on [quasar](https://quasar.dev/). It is a single page application (SPA) running in the 
clients browser. It can be configured  to send it's form data to a yawik installation with the 
[form2mail](https://packagist.org/packages/yawik/form2mail) module enabled.

But the form also works without Yawik. A simple [form2mail.php](https://gitlab.com/yawik/applicationform/-/snippets/2124038) 
snipped shows what you need for a mail.

## Task description

https://gitlab.cross-solution.de/CROSS/strategy/results/applicationform/-/issues/2

## Status

currently works out of the box with our [Demo](https://yawik.org/demo/de)

```
YAWIK_APPLICATION_FORM_ACTON=https://yawik.org/demo/dendmail
YAWIK_JOB_DETAIL_URL=https://yawik.org/demo/details
```

## Requirements

* "node": ">= 10.18.1",
* "npm": ">= 6.13.4",
* "yarn": ">= 1.21.1"

## Installation

```
git clone https://gitlab.com/yawik/applicationform.git
cd applicationform
yarn install
yarn dev
```

## Configuration

The form is .env-aware. 

| Name                         | Value                               | 
|------------------------------|-------------------------------------|
| YAWIK_APPLICATION_FORM_ACTON | URL to which form data is sent      |
| YAWIK_JOB_DETAIL_URL         | URL where we get title or company   |
| YAWIK_ORGANIZATION           | Organizaion ID                      |
| YAWIK_OAUTH_FACEBOOK         | App Identifier                      |
| YAWIK_OAUTH_GOOGLE           | App Identifier                      |
| YAWIK_OAUTH_LINKEDIN         | App Identifier                      |
| YAWIK_OAUTH_XING             | **not working**                     |

If an **YAWIK_OAUTH_\*** variable is not shown, the feature is not used within the form.
Linkedin and Xing are currently not working because of: https://github.com/MrSwitch/hello.js/issues/585

## Demo

The demo is hosted as a Gitlab Page. The form checks users locale and redirects ...

https://form.yawik.org/

## Documentation

we use [mkdocs](https://www.mkdocs.org/) to document. Each repo contains it's documentation in a
`docs/` directory.