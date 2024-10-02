import type { Project } from '@sap-ux/project-access';
import type { LocalEDMXService } from '../types';
/**
 * Creates local EDMX service structure.
 *
 * @param project - Project structure.
 * @param serviceName - Name of the service that is specified in manifest.
 * @param appName - Name of the application.
 * @returns Service structure.
 */
export declare function getLocalEDMXService(project: Project, serviceName: string, appName?: string): LocalEDMXService;
//# sourceMappingURL=service.d.ts.map