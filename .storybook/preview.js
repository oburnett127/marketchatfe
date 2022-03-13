import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'; // Required to get Stories to take on Tailwind styling
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
