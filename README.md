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
YAWIK_APPLICATION_FORM_ACTON=https://api.yawik.org/api/applications
YAWIK_JOB_DETAIL_URL=https://api.yawik.org/
```

## Requirements

- [nodesjs](https://nodejs.org/)
- [yarn](https://yarnpkg.com/) (recommended)

## Installation

```
git clone https://gitlab.com/yawik/applicationform.git
cd applicationform
yarn install
yarn dev
```

## Configuration

`.env` contains default values. They can be [overwritten](https://github.com/kerimdzhanov/dotenv-flow#variables-overwritingpriority) by a `.env.local` file. 

| Name                         | Value                               | 
|------------------------------|-------------------------------------|
| YAWIK_APPLICATION_FORM_ACTON | URL to which form data is sent      |
| YAWIK_STRAPI_URL             | get id, title or company of job     |
| YAWIK_JOB_DETAIL_URL         | URL To job details (optional)       | 
| YAWIK_ORGANIZATION           | Organizaion ID                      |
| YAWIK_OAUTH_DROPBOX          | App Identifier                      |
| YAWIK_OAUTH_FACEBOOK         | App Identifier                      |
| YAWIK_OAUTH_GITHUB           | App Identifier                      |
| YAWIK_OAUTH_GOOGLE           | App Identifier                      |
| YAWIK_OAUTH_LINKEDIN         | App Identifier                      |
| YAWIK_OAUTH_XING             | **not working**                     |
| YAWIK_URL_OPERATOR           | Links to the opeartor of the form   |
| YAWIK_URL_IMPRINT            | Link to the Imprint of the operator |
| YAWIK_URL_PRIVACY            | Link to the Privacy notes           |
| YAWIK_ROUTER_BASE            | BASE of the pages                   |
| YAWIK_APP_KEY                | Shared App Key                      |
| YAWIK_API_URL                | Yawik API                           |


If an **YAWIK_OAUTH_\*** variable is empty, the feature is not used within the form.

Linkedin and Xing are currently not working because of: https://github.com/MrSwitch/hello.js/issues/585

It's possible to hide the Logo and the Footer by using query parameters. Usefull if you plan to use the form in an iframe.

| Param        | Description       |
|--------------|-------------------|
| hl           | hide Logo         |
| hf           | hide Footer       |
| tb           | use toolbar       |

## Demo

The demo is hosted as a Gitlab Page. The form checks users locale and redirects ...

* https://form.yawik.org/
* https://form.yawik.org/?job=sw-devel
* https://form.yawik.org/?hl=1
* https://form.yawik.org/?hf=1
* https://form.yawik.org/?tb=1

## Documentation

we use [mkdocs](https://www.mkdocs.org/) to document. Each repo contains it's documentation in a
`docs/` directory.