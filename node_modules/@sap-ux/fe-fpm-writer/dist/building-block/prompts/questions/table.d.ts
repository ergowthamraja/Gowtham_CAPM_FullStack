import type { Answers } from 'inquirer';
import type { PromptContext, Prompts } from '../../../prompts/types';
import type { BuildingBlockConfig, Table } from '../../types';
export type TablePromptsAnswer = BuildingBlockConfig<Table> & Answers;
/**
 * Returns a list of prompts required to generate a table building block.
 *
 * @param context - prompt context including data about project
 * @returns Prompt with questions for table.
 */
export declare function getTableBuildingBlockPrompts(context: PromptContext): Promise<Prompts<TablePromptsAnswer>>;
//# sourceMappingURL=table.d.ts.map