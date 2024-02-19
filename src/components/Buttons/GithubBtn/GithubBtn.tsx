import React, { FC } from 'react';
import './GithubBtn.css';
import gitHubIcon from './../../../img/icons/gitHub-black.svg';
import { GithubBtnProps } from './GithubBtn.types';

export const GithubButton: FC<GithubBtnProps> = ({ link }) => {
  return (
    <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={gitHubIcon} alt="Link to github repository" />
      GitHub repo
    </a>
  );
};
