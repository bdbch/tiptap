import type { JSONContent } from './types'

export type MigrationFn = (content: JSONContent) => Promise<JSONContent>

export class Migration {
  version: number
  up: MigrationFn = async content => content
  down: MigrationFn = async content => content

  constructor(version: number, up?: MigrationFn, down?: MigrationFn) {
    this.version = version
    if (up) {this.up = up}
    if (down) {this.down = down}
  }

  static create(version: number, up: MigrationFn, down: MigrationFn): Migration {
    return new Migration(version, up, down)
  }
}
