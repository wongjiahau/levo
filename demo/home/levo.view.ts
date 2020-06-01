import { Action } from './action.ts';
import { Model } from './model.ts';
import { LevoView, Levo } from './../../src/levo.ts';
import { elementCreators } from '../../src/element-creators.ts';

export const view: LevoView<Model, Action> = (model) => {
  const h = elementCreators<Action>()
  return (
    h.div({class: 'hi'},
      h.link({rel: 'stylesheet', href: 'home/levo.assets/index.css'}),
      h.button({events: {click: {type: 'minus'}}}, 'minus'),
      model.currentValue.toString(),
      h.button({events: {click: {type: 'add'}}}, 'add'),
      h.button({events: {click: {type: 'stop_interval'}}}, 'stop timer'),
      h.button({events: {click: {type: 'fetch'}}}, 'fetch'),
      h.base({href: 'https'}),
      `Text: ${model.text}`,
    )
  )
}
Levo<Model, Action>().registerView(view)