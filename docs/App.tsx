import { DocCodeBlock, DocContainer, DocDemoBlock, DocHeader, DocHeading } from 'react-doc-ui';
import Demo from './Demo';
import demoCode from './Demo.tsx?raw';

export default function App() {
  return (
    <DocContainer>
      <DocHeader title={PACKAGE_NAME + '@' + PACKAGE_VERSION} />
      <p>Toggle dark or light mode for your MUI apps</p>

      <DocHeading>Install</DocHeading>
      <DocCodeBlock language="bash" code={`npm i ${PACKAGE_NAME}`} />

      <DocHeading>Usage</DocHeading>
      <DocDemoBlock>
        <Demo />
      </DocDemoBlock>
      <DocCodeBlock language="jsx" code={demoCode} />
    </DocContainer>
  );
}
