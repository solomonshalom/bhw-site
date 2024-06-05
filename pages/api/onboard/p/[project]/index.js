import { getAllOnboardProjects } from '..';

async function getReadmeData(url) {
  try {
    const readme = await fetch(url);
    const text = await readme.text();
    // parse YAML frontmatter
    const lines = text.split('\n');
    const frontmatter = {};
    let i = 0;
    for (; i < lines.length; i++) {
      if (lines[i].startsWith('---')) {
        break;
      }
    }
    for (i++; i < lines.length; i++) {
      if (lines[i].startsWith('---')) {
        break;
      }
      const [key, value] = lines[i].split(': ');
      frontmatter[key] = value || null;
    }
    const description = lines.slice(i + 1).join('\n');
    return {
      frontmatter,
      description
    };
  } catch (error) {
    console.error('Failed to fetch or parse README data:', error);
    return { frontmatter: {}, description: '' };
  }
}

export const getOnboardProject = async (name) => {
  try {
    const projects = await getAllOnboardProjects();
    const project = projects.find(p => p.name === name);

    if (!project) {
      throw new Error(`Project with name ${name} not found`);
    }

    if (!project.readmeURL) {
      throw new Error(`README URL not defined for project ${name}`);
    }

    const readmeData = await getReadmeData(project.readmeURL);

    const result = { ...project, readmeData };

    return result;
  } catch (e) {
    console.error('Error in getOnboardProject:', e);
    return null;
  }
};

export default async function handler(req, res) {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ status: 400, error: 'Must provide name' });
  }
  const project = await getOnboardProject(name);
  if (!project) {
    return res.status(404).json({ status: 404, error: 'Project not found' });
  }
  return res.status(200).json(project);
}
