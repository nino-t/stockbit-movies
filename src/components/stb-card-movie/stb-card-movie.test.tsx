import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import * as i from './stb-card-movie.interface';
import StbCardMovie from './stb-card-movie.component';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const argsTemplate = {
  id: 'vdrandom1',
  title: 'Batman: The Dark Knight',
  release: '2008',
  poster: 'https://upload.wikimedia.org/wikipedia/id/8/8a/Dark_Knight.jpg',
  href: '/watch?v=vdrandom1',
  handlePosterClicked: () => {}
}

const MakeTemplate: React.FC<i.StbCardMovieProps> = (props) => {
  return (
    <MemoryRouter>
      <StbCardMovie
        id={props.id}
        title={props.title}
        release={props.release}
        poster={props.poster}
        href={props.href}
        handlePosterClicked={props.handlePosterClicked}
      />
    </MemoryRouter>
  );
}

describe('stb-card-movie component is OK', () => {
  test('rendered', () => {
    render(
      <MakeTemplate
        {...argsTemplate}
      />
    );
    expect(screen.getByRole('stb-card-movie')).toBeInTheDocument();
  });

  test('Fired event clicked poster', () => {
    global.alert = jest.fn();
    render(
      <MakeTemplate
        {...argsTemplate}
        handlePosterClicked={() => alert('Hello World')}
      />
    );
    userEvent.click(screen.getByRole('stb-card-movie__poster'));
    expect(global.alert).toHaveBeenCalled();
  });

  test('Updated props', () => {
    const { rerender } = render(
      <MakeTemplate
        {...argsTemplate}
      />
    );
    rerender(
      <MakeTemplate
        {...argsTemplate}
        title="Bukan Batman"
      />
    );

    expect(screen.getByRole('stb-card-movie__title').innerHTML).toBe('Bukan Batman');
  });

  test('Page movement', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={() => <MakeTemplate {...argsTemplate} href={"/movement-page"} />} />
          <Route path='/movement-page' component={() => <p data-testid="movement-text">Movement Page</p>} />
        </Switch>
      </Router>
    );

    // Test link href and target link is the same.
    expect(screen.getByRole('stb-card-movie__link').closest('a')).toHaveAttribute('href', '/movement-page');

    // Running test movement page.
    history.push('/movement-page');
    expect(screen.getByTestId('movement-text')).toBeInTheDocument();
  });
});