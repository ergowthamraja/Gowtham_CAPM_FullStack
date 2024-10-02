import type { Answers } from 'inquirer';
import type { Prompts, PromptContext } from '../../../prompts/types';
import type { BuildingBlockConfig, FilterBar } from '../../types';
export type FilterBarPromptsAnswer = BuildingBlockConfig<FilterBar> & Answers;
/**
 * Returns a list of prompts required to generate a filterbar building block.
 *
 * @param context - prompt context including data about project
 * @returns Prompt with questions for filterbar.
 */
export declare function getFilterBarBuildingBlockPrompts(context: PromptContext): Promise<Prompts<FilterBarPromptsAnswer>>;
//# sourceMappingURL=filter-bar.d.ts.map