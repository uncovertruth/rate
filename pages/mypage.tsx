import { image, name, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../components/a/Content'
import { Hero } from '../components/a/Hero'
import { Main } from '../components/a/Main'
import { Img as ProfileImg } from '../components/a/ProfileImg'
import { Name as ProfileName } from '../components/a/ProfileName'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner
} from '../components/a/Range'
import { Inner as HeroInner } from '../components/m/Hero'

import { RangeValuation } from '../components/a/RangeValuation'

import { Bar } from '../components/a/Ranking'
import { ResultComment } from '../components/a/ResultComment'
import { ResultRank, ResultRankInner } from '../components/a/ResultRanking'
import { Wrapper } from '../components/a/Wrapper'
import { Navbar } from '../components/m/Navbar'
import { Rank } from '../components/m/Ranking'

type Props = {
  url: {
    query: {
      orgId: string
      memberId: string
    }
  }
}

export default ({ url: { query } }: Props) => (
  <Wrapper>
    <Navbar {...query} />
    <Main>
      <Hero>
        <HeroInner>
          <ProfileImg>
            <img src={image.imageUrl(300, 300)} alt={random.word()} />
          </ProfileImg>
          <ProfileName>{query.memberId}</ProfileName>
        </HeroInner>
      </Hero>
      <Content>
        <ContentInner>
          <Range>
            <RangeInner>
              <RangeValuation>
                <p>{random.word()}</p>
                <p>{random.word()}</p>
              </RangeValuation>
              <RangeBar>
                <RangeBarThumb style={{ left: '50%' }} />
              </RangeBar>
            </RangeInner>
          </Range>
        </ContentInner>
        <ContentInner>
          <ResultRank>
            <ResultRankInner>
              <span>50人中</span>
              10位
            </ResultRankInner>
          </ResultRank>
          <ResultComment>{random.word()}</ResultComment>
        </ContentInner>
      </Content>
      <Content>
        <ContentInner>
          <Rank>
            <span>{random.number()}</span>
            <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
              <img src={image.imageUrl(300, 300)} alt={random.word()} />
              <p>{name.firstName()}</p>
            </Bar>
          </Rank>
          <Rank>
            <span>{random.number()}</span>
            <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
              <img src={image.imageUrl(300, 300)} alt={random.word()} />
              <p>{name.firstName()}</p>
            </Bar>
          </Rank>
        </ContentInner>
      </Content>
    </Main>
  </Wrapper>
)
