/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

import * as fonts from './fonts';
import * as colours from './colours';

const ContactList = styled.ul`
  list-style-type: none;
  margin: 3rem 0;
`;

const Contact = styled.li`
  ${fonts.helveticaNeue}
  margin: 0;
`;

const ContactText = styled.span``;

const ContactLink = styled.a`
  color: #666666;
  display: block;
  font-size: 1.2em;
  line-height: 1rem;
  padding: 1rem;
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    background-color: #eaeaea;
    outline: none;
    color: ${colours.primaryBlue};

    .fa-github + ${ContactText} {
      color: ${colours.githubColour};
    }

    .fa-twitter + ${ContactText} {
      color: ${colours.twitterColour};
    }

    .fa-linkedin + ${ContactText} {
      color: ${colours.linkedinColour};
    }
  }
`;

const ContactIcon = styled.i`
  margin-right: 20px;
  color: {props => props.colour}
`;

const Contacts = () => (
  <ContactList className="social-networks">
    <Contact>
      <ContactLink
        href="mailto:julien@julien-maze.com"
        title="julien@julien-maze.com"
      >
        <ContactIcon className="fa fa-fw fa-envelope social-networks__icon"></ContactIcon>
        <ContactText>Email</ContactText>
      </ContactLink>
    </Contact>
    <Contact>
      <ContactLink href="http://github.com/djorak" title="github.com/djorak">
        <ContactIcon
          className="fa fa-fw fa-github"
          colour={colours.githubColour}
        ></ContactIcon>
        <ContactText>Github</ContactText>
      </ContactLink>
    </Contact>
    <Contact>
      <ContactLink
        href="http://www.twitter.com/djorak"
        title="twitter.com/djorak"
      >
        <ContactIcon
          className="fa fa-fw fa-twitter"
          colour={colours.twitterColour}
        ></ContactIcon>
        <ContactText>Twitter</ContactText>
      </ContactLink>
    </Contact>
    <Contact>
      <ContactLink
        href="http://linkedin.com/in/julienmaze"
        title="linkedin.com/in/julienmaze"
      >
        <ContactIcon
          className="fa fa-fw fa-linkedin"
          colour={colours.linkedinColour}
        ></ContactIcon>
        <ContactText>LinkedIn</ContactText>
      </ContactLink>
    </Contact>
  </ContactList>
);

export default Contacts;
