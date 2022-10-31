import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Stack } from '@mui/material';
import { FC } from 'react';

type TSocialShare = {
  link: string;
  title: string;
};

export const SocialShare: FC<TSocialShare> = ({ link, title }) => {
  return (
    <Stack direction="row" spacing={1}>
      <FacebookShareButton url={link}>
        <FacebookIcon round size={30} />
      </FacebookShareButton>
      <TwitterShareButton url={link} title={title}>
        <TwitterIcon round size={30} />
      </TwitterShareButton>
    </Stack>
  );
};
