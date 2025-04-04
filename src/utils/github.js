export const fetchGitHubRepos = async (username) => {
    try {
      const url = `https://api.github.com/users/m7anj/repos`;
      
      const headers = {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.REACT_APP_GITHUB_TOKEN && {
          'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
        })
      };
      
      const response = await fetch(url, { headers });
      
      if (!response.ok) {
        throw new Error(`GitHub API responded with status: ${response.status}`);
      }
      
      const repos = await response.json();
      
      return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      return [];
    }

  };

export const fetchFeaturedRepos = async (username, featuredRepoNames) => {
    const allRepos = await fetchGitHubRepos(username);
    return allRepos.filter(repo => featuredRepoNames.includes(repo.name));
};