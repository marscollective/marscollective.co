import React from 'react'
import { Link } from 'gatsby'
import tw, { css } from 'twin.macro'
import {
  injectIntl,
  IntlContextConsumer,
  changeLocale
} from 'gatsby-plugin-intl'

const links = [
  {
    label: 'nav.home.label',
    url: 'nav.home.url'
  },
  {
    label: 'nav.services.label',
    url: 'nav.services.url'
  },
  {
    label: 'nav.portfolio.label',
    url: 'nav.portfolio.url'
  },
  {
    label: 'nav.about.label',
    url: 'nav.about.url'
  },
  {
    label: 'nav.blog.label',
    url: 'nav.blog.url'
  },
  {
    label: 'nav.contact.label',
    url: 'nav.contact.url'
  }
]

const baseURL = {
  en: '/en/',
  es: '/es/',
  pt: '/pt/'
}

const languageName = {
  en: '[en]',
  es: '[es]',
  pt: '[pt]'
}

const Nav = ({ intl }) => (
  <div
    css={[
      tw`absolute bg-default transition-colors lg:(relative bg-transparent w-auto)`,
      css({ width: 'calc(100% - 3rem)' })
    ]}
  >
    <ul
      css={[
        tw`font-semibold list-none py-10 space-y-10 lg:(inline-flex py-0 space-y-0 space-x-8)`
      ]}
    >
      {links.map(({ label, url }, i) => (
        <li key={i}>
          <Link
            to={`${
              baseURL[intl.formatMessage({ id: 'lang' })]
            }#${intl.formatMessage({ id: url })}`}
            alt={intl.formatMessage({ id: label })}
            css={[tw`text-default hover:text-mint`]}
          >
            {intl.formatMessage({ id: label })}
          </Link>
        </li>
      ))}
      <li>
        <ul css={[tw`flex space-x-4`]}>
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <li
                  key={language}
                  onClick={() => changeLocale(language)}
                  aria-hidden="true"
                  css={[
                    tw`hover:text-mint duration-500 cursor-pointer`,
                    currentLocale === language
                      ? tw`text-mint`
                      : tw`text-default`
                  ]}
                >
                  {languageName[language]}
                </li>
              ))
            }
          </IntlContextConsumer>
        </ul>
      </li>
    </ul>
  </div>
)

export default injectIntl(Nav)
