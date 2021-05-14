# Application Form

Quasar based application form for [Yawik](https://yawik.org).

## Task description

https://gitlab.cross-solution.de/CROSS/strategy/results/applicationform/-/issues/2

## Status

WIP

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
| YAWIK_ORGANIZATION           | Organizaion ID                      |
| YAWIK_OAUTH_FACEBOOK         | App Identifier                      |
| YAWIK_OAUTH_GOOGLE           | App Identifier                      |
| YAWIK_OAUTH_LINKEDIN         | **not working**                     |
| YAWIK_OAUTH_XING             | **not working**                     |


## Demo

The demo is hosted as a Gitlab Page. The form checks users locale and redirects ...

https://form.yawik.org/


## Documentation

we use [mkdocs](https://www.mkdocs.org/) to document. Each repo contains it's documentation in a
`docs/` directory.