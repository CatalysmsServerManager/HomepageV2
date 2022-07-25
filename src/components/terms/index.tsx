import * as React from 'react';
import { Chapter, ChaptersContainer, Container, Landing, SubChapter } from './style';
import { Csmm } from 'lib/icons';

export const Terms: React.FC = () => (
  <Container>
    <Landing>
      <h1>Terms of Service</h1>
      <p>Last modified on 25 July 2022.</p>
      <Csmm scale={3} />
    </Landing>
    <ChaptersContainer>
      <Chapter>
        <h2>Licensing</h2>
        <SubChapter>
          <h3>Website licensing</h3>
          <p>
            The Website, the URL, as well as all content included on the Website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is Our property and/or Our content suppliers, and is protected by applicable copyright laws.
          </p>
          <p>
            Any graphics, identifiers, logos, page headers, button icons, scripts, and service names are trademarks, registered trademarks or trade dress of Us. All other trademarks not owned by Us that appear on the Website, are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Us.
          </p>
          <p>
            Where visiting the Website, You are granted during Your visit, a limited license to access and make personal use of the Website, the URL, as well as all content included on the Website as offered to You.
          </p>
        </SubChapter>
        <SubChapter>
          <h3>License restrictions</h3>

            Except with our written consent , You shall not:
          <ul>
            <li>modify the Website, Customer Content, or the Products and Services, or any portion of it;</li>
            <li>
              Download the Website, or any portion of it, except for page caching, and/or where it or its content has explicitly been made available by for download. Usage of any download shall be limited to Your personal use only;
            </li>
            <li>
              Download the Customer Content, or any portion of it, except to the extent and within the limits within which such Customer Content has been made available to You;
            </li>
            <li>
              Use any logo or other of Our proprietary graphic or trademark outside of scope of the license granted, including in connection with any product or service that is not Ours, in any manner that is likely to cause confusion among customers, or in any manner that (may) disparage(s) or discredit(s) Us;
            </li>
            <li>
              reproduce, duplicate, copy, sell, resell, visit, or otherwise exploit the Website, Customer Content, or the Products and Services, or any portion of it, for any commercial purpose;
            </li>
            <li>
              frame or utilize framing techniques to enclose any trademark, logo, Website, Customer Content, or the Products and Services, or any portion of it, or other proprietary information (including images, text, page layout, or form) without express written consent;
            </li>
            <li>
              use any meta tags or any other “hidden text” utilizing any of Our (trade) name or trademarks;
            </li>
            <li>
              remove or alter any copyright notice.
            </li>
          </ul>
        </SubChapter>
        <SubChapter>
          <h3>Termination</h3>
            The license granted shall automatically terminate after the time for which they are granted, if You violate these Terms and/or any of these restrictions, and/or may be terminated for convenience at any time, whichever is first. We reserve all rights of action to seek for compensation and/or injunction.
        </SubChapter>
      </Chapter>
      <Chapter><h2>Privacy Policy</h2></Chapter>
      <SubChapter><h3>Topics </h3>
        <ul>
          <li>What data do we collect?</li>
          <li>How do we store your data?</li>
          <li>What are your data protection rights?</li>
          <li>What are cookies?</li>
          <li>How do we use cookies?</li>
          <li>What types of cookies do we use?</li>
          <li>How to manage your cookies?</li>
        </ul>
      </SubChapter>
      <SubChapter>
        <h3>What data do we collect?</h3>
        <ul>
          <li>Chat message content (Not stored, used for functional purposes and not for analytics)</li>
          <li>Data collected from games you connected to CSMM&apos;s platform</li>
          <li>Opaque identifiers for third party platforms including but not limited to Discord and the game(s) you connected to CSMM</li>
        </ul>
      </SubChapter>
      <SubChapter>
        <h3>How do we store your data?</h3>
      CSMM securely stores your data in databases. It will store your cookies for 1 year after your latest visit. Once this period has expired, this data will automatically be removed. Data that is used for your account will remain until your account is manually removed.
      </SubChapter>
      <SubChapter>
        <h3>What are your data protection rights?</h3>
        CSMM would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        <ul>
          <li>
            <strong>The right to access</strong> - You have the right to request CSMM a copy of your personal data.
          </li>
          <li>
            <strong>The right to rectification</strong> - You have the right to request that CSMM corrects any information you believe is inaccurate. You also have the right to request to complete information you believe is incomplete.
          </li>
          <li>
            <strong>The right to restrict processing</strong> - You have the right to object to CSMM&apos;s processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to data portability</strong> - You have the right to request that CSMM transfers the data that we have collected to another organization, or directly to you, under certain conditions.
          </li>
        </ul>

      </SubChapter>

      <SubChapter>
        <h3>What types of cookies do we use?</h3>
        There are a number of different types of cookies, however, our websites uses:
        <ul>
          <li>
            <strong>Functional cookies</strong> - CSMM uses these cookies so that we can recognize you on our website and remember who you are on your next visit.
          </li>

          <li>
            <strong>Third party cookies</strong> - To improve our communication we make use of social media channels like Discord and Github. Some of these channels make use of cookies. CSMM does not verify these cookies. For this you should consult the cookie policy of the third party in question.
          </li>
        </ul>
      </SubChapter>
      <SubChapter>
        <h3>Third party cookies that could end up on your device</h3>
        These cookies could be saved on your device:
        <ul>
          <li>Google: Google analytics / google apis / adwords</li>
        </ul>
      </SubChapter>
      <SubChapter>
        <h3>How to manage your cookies?</h3>
        You can disable cookies, remove or adapt the settings of our cookies. We cannot assure that our website will still work as optimal as intended. Disabling is not recommended. Do you want to know more about cookies, surf to <a href="https://www.allaboutcookies.org" rel="noreferrer noopener">www.allaboutcookies.org</a>. This site gives more information about cookies. Explains in detail how you can remove cookies.
      </SubChapter>

      <Chapter>
        <h2>Contact</h2>
        <p>
          In case you have any questions or wish to contact us in the context of these terms of service. You can reach us via the options below:
        </p>
        <ul>
          <li><a href="https://github.com/niekcandaele" rel="noreferrer noopener" target="_blank">Niek Candaele</a></li>
          <li><a href="mailto:info@csmm.app" rel="noreferrer noopener" target="_blank">info@csmm.app</a></li>
          <li><a href="https://discordapp.com/invite/%45wy%44d%4E%41" rel="noreferrer noopener" target="_blank">Discord</a></li>
        </ul>
      </Chapter>
    </ChaptersContainer>
  </Container>
);
