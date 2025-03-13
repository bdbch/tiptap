import type { Editor } from './Editor.js'
import type { Migration } from './Migration.js'

export class MigrationManager {
  private editor: Editor

  /**
   * The most recent migration version, defaults to -1 if no migrations have been added
   * @private
   */
  private mostRecentMigrationVersion: number = -1

  /**
   * A raw list of migrations with versions
   * @private
   */
  private rawMigrations: Migration[] = []

  /**
   * A sorted list of migrations
   * @public
   */
  public get migrations() {
    return this.rawMigrations.sort((a, b) => a.version - b.version)
  }

  constructor(editor: Editor) {
    this.editor = editor
    this.rawMigrations = []
  }

  /**
   * Adds a migration to the migration manager
   * @param migration The migration to add
   */
  addMigration(migration: Migration) {
    this.checkForDuplicateVersions(migration.version)
    this.rawMigrations.push(migration)
  }

  /**
   * Removes a migration from the migration manager
   * @param migrationOrVersion The migration or version to remove
   */
  removeMigration(migrationOrVersion: Migration | number) {
    const version = typeof migrationOrVersion === 'number' ? migrationOrVersion : migrationOrVersion.version
    this.rawMigrations = this.rawMigrations.filter(m => m.version !== version)
  }

  checkForDuplicateVersions(version: number) {
    if (this.rawMigrations.some(m => m.version === version)) {
      throw new Error(`Duplicate migration version: ${version}`)
    }
  }
}
