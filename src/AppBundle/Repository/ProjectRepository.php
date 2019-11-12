<?php

namespace AppBundle\Repository;

/**
 * ProjectRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ProjectRepository extends \Doctrine\ORM\EntityRepository
{
    public function getFilterProjects($filter)
    {
        $qb  = $this->getEntityManager()->createQueryBuilder("p");

        try{
            $qb->select("p")
                ->from("AppBundle:Project","p")
                ->where("p.name like :filter")
                ->setParameter("filter","%".$filter."%")
            ;
            return $qb->getQuery()->getResult();

        }catch (\Doctrine\ORM\NonUniqueResultException $e){
            return null;
        }


    }

}
