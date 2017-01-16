import { Project } from './project';

export class Map {
  public project: Project;
  public name: string;
  public slug: string;
  public width: number;
  public height: number;

  link():string {
    return this.project.home() + "/map/" + this.slug;
  }
}