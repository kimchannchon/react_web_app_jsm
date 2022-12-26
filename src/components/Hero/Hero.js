import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my world<br/>
        Hi, I'm Kimchann Chon
      </SectionTitle>
      <SectionText>
        Freelancing on Web development | Data Science | Digital Marketing
      </SectionText>
      <Button onClick={() => window.location = 'https://kimchannchon.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;