import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

import axiosInstance from './axios';

import { messageObject, toastObject } from '@utils/formatters';

// =====
// Axios
// =====

// CREATE
export const create = async (payload: any) => {
  const { data } = await axiosInstance.post('/endpoint', payload);
  return data;
};

// RETRIEVE
export const retrieveAll = async (): Promise<any[]> => {
  const { data } = await axiosInstance.get('/endpoint');
  return data;
};

export const retrieveOne = async (id: number): Promise<any> => {
  const { data } = await axiosInstance.get(`/endpoint/${id}`);
  return data;
};

// UPDATE
export const update = async ({ payload, id }: { payload: any; id: number }) => {
  const { data } = await axiosInstance.patch(`/endpoint/${id}`, payload);
  return data;
};

// DELETE
export const remove = async (id: number): Promise<any> => {
  await axiosInstance.delete(`/endpoint/${id}`, {
    params: {
      id_param: id
    }
  });
};

// ==========
// ReactQuery
// ==========

// CREATE
export const useMutationCreate = () => {
  const queryClient = useQueryClient();
  const { message, notification } = App.useApp();

  return useMutation(create, {
    onMutate: () => {
      message.open(
        messageObject('loading', 'Création...', 'useMutationCreate')
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['someQuery']);

      message.success(messageObject('success', 'Créé', 'useMutationCreate'));
    },
    onError: () => {
      message.error(
        messageObject('error', 'Une erreur est survenue', 'useMutationCreate')
      );
      notification.error(
        toastObject(
          'error',
          'Impossible de créer la séance',
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      );
    }
  });
};

// RETRIEVE
export const useQueryRetrieveAll = () => {
  const { notification } = App.useApp();

  return useQuery(['someQuery'], () => retrieveAll, {
    // Stale 5min
    staleTime: 60_000 * 5,
    onError: () =>
      notification.error(
        toastObject(
          'error',
          'Impossible de récupérer les données',
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      )
  });
};

export const useQueryRetrieveOne = (id: number) => {
  const { notification } = App.useApp();

  return useQuery(['someQuery', id], () => retrieveOne(id), {
    // Stale 5min
    staleTime: 60_000 * 5,
    onError: () =>
      notification.error(
        toastObject(
          'error',
          'Impossible de récupérer les données',
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      )
  });
};

// UPDATE
export const useMutationUpdate = () => {
  const queryClient = useQueryClient();
  const { message, notification } = App.useApp();

  return useMutation(update, {
    onMutate: () => {
      message.open(
        messageObject(
          'loading',
          'Modification en cours...',
          'useMutationUpdate'
        )
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['someQuery']);
      message.success(
        messageObject('success', 'Modification réussie', 'useMutationUpdate')
      );
    },
    onError: () => {
      message.error(
        messageObject('error', 'Une erreur est survenue', 'useMutationUpdate')
      );
      notification.error(
        toastObject(
          'error',
          'Modification échouée',
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      );
    }
  });
};

// DELETE
export const useMutationDelete = () => {
  const queryClient = useQueryClient();
  const { message, notification } = App.useApp();

  return useMutation(remove, {
    onMutate: () => {
      message.open(
        messageObject('loading', 'Suppression en cours...', 'useMutationDelete')
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['someQuery']);
      message.success(
        messageObject('success', 'Suppression réussie', 'useMutationDelete')
      );
    },
    onError: () => {
      message.error(
        messageObject('error', 'Une erreur est survenue', 'useMutationDelete')
      );
      notification.error(
        toastObject(
          'error',
          'Suppression échouée',
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      );
    }
  });
};
