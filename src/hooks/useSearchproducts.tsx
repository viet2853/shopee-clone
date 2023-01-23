import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { schema, Schema } from 'src/utils/rules'
import useQueryConfig from './useQueryConfig'

type FormData = Pick<Schema, 'name'>
const nameSchema = schema.pick(['name'])

export default function useSearchproducts() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(nameSchema),
    defaultValues: {
      name: ''
    }
  })
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  const onSubmitSearch = handleSubmit(({ name }) => {
    const config =
      queryConfig.sort_by === 'price'
        ? omit(
            {
              ...queryConfig,
              name
            },
            ['order', 'sort_by']
          )
        : {
            ...queryConfig,
            name
          }
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { register, onSubmitSearch }
}
